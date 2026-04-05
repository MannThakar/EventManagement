"use client";
import React, { useCallback, useEffect, useMemo } from "react";
import Card from "@/components/common/Card";
import EventModal from "@/components/EventModal";
import Heading from "@/components/common/Heading";
import {
  setSelectedEvent,
  setIsModalValue,
  useAppContext,
  setIsReadOnly,
  setEvents,
  setFilters,
} from "@/context";
import { iEvent } from "@/interface/event";
import PrivateRoute from "@/route/PrivateRoute";
import {
  deleteEvent,
  errorToast,
  getAllEvents,
  hasTimeConflict,
  saveEvent,
  successToast,
} from "@/utils/helper";
import { EVENT_MESSAGE } from "@/utils/message";
import useDebounce from "@/hooks/useDebounce";
import NoDataFound from "@/components/common/NoDataFound";
import FilterHeader from "@/components/Filters";
import { DEFAULT_IMAGES } from "@/utils/constant";

const Home = () => {
  const {
    state: { events, search, filters },
    dispatch,
  } = useAppContext();

  const debouncedSearch = useDebounce(search, 500);

  const loadEvents = useCallback(async () => {
    try {
      const data = await getAllEvents();
      setEvents(dispatch, data);
    } catch (err) {
      errorToast(err as string);
    }
  }, [dispatch]);

  const handleEdit = (event: iEvent) => {
    setSelectedEvent(dispatch, event);
    setIsModalValue(dispatch, true);
  };

  const handleClose = useCallback(() => {
    setIsModalValue(dispatch, false);
    setIsReadOnly(dispatch, false);
    setSelectedEvent(dispatch, {} as iEvent);
  }, [dispatch]);

  const handleSave = useCallback(
    async (updatedEvent: iEvent) => {
      try {
        const eventWithId = {
          ...updatedEvent,
          image:
            DEFAULT_IMAGES[
              updatedEvent.category as keyof typeof DEFAULT_IMAGES
            ] || "",
          id: updatedEvent.id || crypto.randomUUID(),
        };

        const conflict = hasTimeConflict(eventWithId, events);

        if (conflict) {
          errorToast("This event time overlaps with another event.");
          return;
        }

        await saveEvent(eventWithId);
        await loadEvents();
        successToast(EVENT_MESSAGE?.SUCCESS);
        handleClose();
      } catch (err) {
        errorToast(err as string);
      }
    },
    [events, loadEvents, handleClose],
  );

  const handleDelete = useCallback(
    async (id: string) => {
      if (!id) return;
      try {
        await deleteEvent(id);
        await loadEvents();
        successToast(EVENT_MESSAGE?.DELETE_SUCCESS);
      } catch (err) {
        errorToast(err as string);
      }
    },
    [loadEvents],
  );

  const handleView = useCallback(
    (item: iEvent) => {
      setSelectedEvent(dispatch, item);
      setIsModalValue(dispatch, true);
      setIsReadOnly(dispatch, true);
    },
    [dispatch],
  );

  const handleResetFilters = useCallback(() => {
    setFilters(dispatch, {
      eventType: "",
      category: "",
      startDate: "",
      endDate: "",
      sortBy: "",
    });
  }, [dispatch]);

  const handleFilterChange = useCallback(
    (key: string, value: string) => {
      setFilters(dispatch, {
        [key]: value,
      });
    },
    [dispatch],
  );

  const filteredEvents = useMemo(
    () =>
      events
        ?.filter((event) => {
          const query = debouncedSearch.toLowerCase();

          const matchesSearch =
            event.title.toLowerCase().includes(query) ||
            event.description?.toLowerCase().includes(query);

          const matchesEventType = filters.eventType
            ? event.eventType === filters.eventType
            : true;

          const matchesCategory = filters.category
            ? event.category === filters.category
            : true;

          const matchesStartDate = filters.startDate
            ? new Date(event.startDateTime) >= new Date(filters.startDate)
            : true;

          const matchesEndDate = filters.endDate
            ? new Date(event.endDateTime) <=
              new Date(new Date(filters.endDate).setHours(23, 59, 59, 999))
            : true;

          return (
            matchesSearch &&
            matchesEventType &&
            matchesCategory &&
            matchesStartDate &&
            matchesEndDate
          );
        })
        ?.sort((a, b) => {
          if (!filters.sortBy) return 0;

          if (filters.sortBy === "startDate") {
            return (
              new Date(a.startDateTime).getTime() -
              new Date(b.startDateTime).getTime()
            );
          }

          if (filters.sortBy === "title") {
            return a.title.localeCompare(b.title);
          }

          return 0;
        }),
    [events, debouncedSearch, filters],
  );

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return (
    <section className="">
      <Heading text="Upcoming Events" />
      <FilterHeader
        onChange={handleFilterChange}
        onReset={handleResetFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 row-gap-4">
        {filteredEvents?.length === 0 ? (
          <div className="col-span-full w-full mt-40">
            <NoDataFound
              text="No Upcoming Events Found"
              className="mx-auto w-full"
              textClassName="mt-10"
            />
          </div>
        ) : (
          filteredEvents?.map((item) => (
            <Card
              key={item.id}
              item={item}
              onEditClick={() => handleEdit(item)}
              onReadClick={() => handleView(item)}
              onDeleteClick={() => handleDelete(item.id as string)}
            />
          ))
        )}

        <EventModal onClose={handleClose} onSave={handleSave} />
      </div>
    </section>
  );
};

export default PrivateRoute(Home);

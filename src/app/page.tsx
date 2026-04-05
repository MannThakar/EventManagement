"use client";
import React, { useEffect } from "react";
import Card from "@/components/common/Card";
import EventModal from "@/components/EventModal";
import Heading from "@/components/common/Heading";
import {
  setSelectedEvent,
  setIsModalValue,
  useAppContext,
  setIsReadOnly,
  setEvents,
} from "@/context";
import { iEvent } from "@/interface/event";
import PrivateRoute from "@/route/PrivateRoute";
import {
  deleteEvent,
  errorToast,
  getAllEvents,
  saveEvent,
  successToast,
} from "@/utils/helper";
import { EVENT_MESSAGE } from "@/utils/message";
import useDebounce from "@/hooks/useDebounce";
import NoDataFound from "@/components/common/NoDataFound";

const Home = () => {
  const {
    state: { events, search },
    dispatch,
  } = useAppContext();

  const debouncedSearch = useDebounce(search, 500);

  const loadEvents = async () => {
    try {
      const data = await getAllEvents();
      setEvents(dispatch, data);
    } catch (err) {
      errorToast(err as string);
    }
  };

  const handleEdit = (event: iEvent) => {
    setSelectedEvent(dispatch, event);
    setIsModalValue(dispatch, true);
  };

  const handleSave = async (updatedEvent: iEvent) => {
    await saveEvent({
      ...updatedEvent,
      id: updatedEvent.id || crypto.randomUUID(),
    });
    await loadEvents();
  };

  const handleDelete = async (id: string) => {
    if (!id) return;

    try {
      await deleteEvent(id);
      await loadEvents();
      successToast(EVENT_MESSAGE?.DELETE_SUCCESS);
    } catch (err) {
      errorToast(err as string);
    }
  };

  const handleClose = () => {
    setIsModalValue(dispatch, false);
    setIsReadOnly(dispatch, false);
    setSelectedEvent(dispatch, null);
  };

  const handleView = (item: iEvent) => {
    setSelectedEvent(dispatch, item);
    setIsModalValue(dispatch, true);
    setIsReadOnly(dispatch, true);
  };

  const filteredEvents = events?.filter((event) => {
    const query = debouncedSearch.toLowerCase();

    return (
      event.title.toLowerCase().includes(query) ||
      event.description?.toLowerCase().includes(query)
    );
  });

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <section className="">
      <Heading text="Upcoming Events" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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

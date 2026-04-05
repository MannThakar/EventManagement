"use client";
import React, { useEffect } from "react";
import Modal from "./common/Modal";
import { EventModalProps, iEvent } from "@/interface/event";
import { Controller, useForm, useWatch } from "react-hook-form";
import {
  EVENT_CATEGORY,
  EVENT_TYPE_OPTIONS,
  EVENT_TYPES,
} from "@/utils/constant";
import { FIELD_MESSAGE } from "@/utils/message";
import TextArea from "./common/TextArea";
import dayjs from "dayjs";
import { getNextTimeSlot } from "@/utils/helper";
import { useAppContext } from "@/context";
import Input from "./common/Input";
import Dropdown from "./common/Dropdown";
import DateTimeRangePicker from "./common/DateTimeRangePicker";

const EventModal: React.FC<EventModalProps> = ({ onClose, onSave }) => {
  const { state } = useAppContext();
  const { selectedEvent, isModalOpen, isReadOnly } = state;
  const {
    control,
    setValue,
    register,
    reset,
    trigger,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iEvent>({
    defaultValues: {
      eventType: EVENT_TYPE_OPTIONS?.[0]?.value,
      category: EVENT_CATEGORY?.[0]?.value,
    },
  });

  const eventType = useWatch({
    control,
    name: "eventType",
  });
  const startDate = useWatch({
    control,
    name: "startDateTime",
  });
  const endDate = useWatch({
    control,
    name: "endDateTime",
  });

  useEffect(() => {
    if (eventType === "Online") {
      setValue("location", "");
    } else if (eventType === "In-Person") {
      setValue("eventLink", "");
    }
  }, [eventType, setValue]);

  const onSubmit = (data: iEvent) => {
    onSave?.(data);
  };

  useEffect(() => {
    register("startDateTime", {
      required: FIELD_MESSAGE.REQUIRED,
      validate: (value) => {
        const end = getValues("endDateTime");
        if (!end) return true;

        return (
          dayjs(value).isBefore(dayjs(end)) ||
          FIELD_MESSAGE.START_TIME_GREATER_THAN_END_TIME
        );
      },
    });

    register("endDateTime", {
      required: FIELD_MESSAGE.REQUIRED,
      validate: (value) => {
        const start = getValues("startDateTime");
        if (!start) return true;

        return (
          dayjs(value).isAfter(dayjs(start)) ||
          FIELD_MESSAGE.END_TIME_LESS_THAN_START_TIME
        );
      },
    });
  }, [register, getValues]);

  useEffect(() => {
    if (selectedEvent) {
      reset({
        id: selectedEvent.id || "",
        title: selectedEvent.title || "",
        eventType: selectedEvent.eventType || "",
        location: selectedEvent.location || "",
        eventLink: selectedEvent.eventLink || "",
        startDateTime: selectedEvent.startDateTime || "",
        endDateTime: selectedEvent.endDateTime || "",
        category: selectedEvent.category || "",
        organizer: selectedEvent.organizer || "",
        description: selectedEvent.description || "",
      });
    }
  }, [selectedEvent, reset]);
  console.log("dsakpof");

  if (!isModalOpen) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={onClose}
      title="Edit Event"
      className="w-180 max-h-140 lg:w-230 lg:max-h-140 xl:w-300 xl:max-h-160 h-full 2xl:w-300 2xl:max-h-fit overflow-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-5 h-full ">
        <Input
          name="title"
          label="Title"
          control={control}
          type="text"
          placeHolder="Enter title"
          rules={{ required: FIELD_MESSAGE.REQUIRED }}
          showError={!!errors.title}
          errorMessage={errors.title?.message as string}
          disabled={isReadOnly}
          isRequiredField
        />

        <Controller
          name="eventType"
          control={control}
          rules={{ required: FIELD_MESSAGE.REQUIRED }}
          render={({ field }) => (
            <Dropdown
              options={EVENT_TYPE_OPTIONS}
              value={field.value}
              onChange={field.onChange}
              placeholder="Select event type"
              disabled={isReadOnly}
              error={errors.eventType?.message as string}
            />
          )}
        />

        {eventType === EVENT_TYPES.IN_PERSON && (
          <Input
            name="location"
            label="Location"
            control={control}
            type="text"
            placeHolder="Enter location"
            rules={{ required: FIELD_MESSAGE.REQUIRED }}
            showError={!!errors.location}
            errorMessage={errors.location?.message as string}
            disabled={isReadOnly}
            isRequiredField
          />
        )}

        {eventType === EVENT_TYPES.ONLINE && (
          <Input
            name="eventLink"
            label="Event Link"
            control={control}
            type="text"
            placeHolder="Enter event link"
            rules={{ required: FIELD_MESSAGE.REQUIRED }}
            showError={!!errors.eventLink}
            errorMessage={errors.eventLink?.message as string}
            disabled={isReadOnly}
            isRequiredField
          />
        )}

        <div className="w-full">
          <DateTimeRangePicker
            startDate={startDate || null}
            endDate={endDate || null}
            disabled={isReadOnly}
            onStartChange={(date) => {
              const newStart = date ? dayjs(date) : null;

              setValue(
                "startDateTime",
                newStart ? newStart.format("YYYY-MM-DDTHH:mm:ss") : "",
                { shouldValidate: true },
              );

              if (newStart) {
                const currentEnd = endDate ? dayjs(endDate) : null;

                if (!currentEnd || !currentEnd.isAfter(newStart)) {
                  setValue(
                    "endDateTime",
                    newStart.add(30, "minute").format("YYYY-MM-DDTHH:mm:ss"),
                    { shouldValidate: true },
                  );
                }
              }

              // 🔥 IMPORTANT
              trigger(["startDateTime", "endDateTime"]);
            }}
            onEndChange={(date) => {
              setValue(
                "endDateTime",
                date ? dayjs(date).format("YYYY-MM-DDTHH:mm:ss") : "",
                { shouldValidate: true },
              );

              // 🔥 IMPORTANT
              trigger(["startDateTime", "endDateTime"]);
            }}
            startError={errors.startDateTime?.message as string}
            endError={errors.endDateTime?.message as string}
          />
        </div>

        <Controller
          name="category"
          control={control}
          rules={{ required: FIELD_MESSAGE.REQUIRED }}
          render={({ field }) => (
            <Dropdown
              placeholder="Select event category"
              value={field.value}
              options={EVENT_CATEGORY}
              onChange={field.onChange}
              error={errors.category?.message as string}
              disabled={isReadOnly}
            />
          )}
        />

        <Input
          name="organizer"
          label="Organizer"
          control={control}
          type="text"
          placeHolder="Enter organizer name"
          rules={{ required: FIELD_MESSAGE.REQUIRED }}
          showError={!!errors?.organizer}
          errorMessage={errors?.organizer?.message as string}
          disabled={isReadOnly}
          isRequiredField
        />

        <span className="col-span-2">
          <TextArea
            name="description"
            label="Description"
            control={control}
            type="text"
            disabled={isReadOnly}
            placeHolder="Enter description"
          />
        </span>
      </div>
    </Modal>
  );
};

export default React.memo(EventModal);

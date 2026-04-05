import DatePicker from "react-datepicker";

const DateRangePicker = ({
  startDate,
  endDate,
  onChange,
}: {
  startDate: Date | null;
  endDate: Date | null;
  onChange: (dates: [Date | null, Date | null]) => void;
}) => {
  return (
    <div className="px-2">
      <DatePicker
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        placeholderText="Select Date Range"
        className="outline-none bg-transparent font-medium cursor-pointer w-36 text-black placeholder:text-gray-800"
        dateFormat="dd MMMM"
      />
    </div>
  );
};

export default DateRangePicker;

import DatePickerComponent from "@/components/DatePicker";
import ProfileDropdown from "@/components/DropDown";
import Cards from "@/components/OrderStats";
import Orders from "@/components/OrdersList";

export default function Home() {
  return (
    <div className=" border-t-[1px] bg-current">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1 pl-10 pt-9">
          <p className="text-black text-2xl font-bold leading-8">Good Morning, Aaron!</p>
          <p className="text-[#667085] font-normal text-sm leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className="flex gap-6 items-center pr-10">
          <DatePickerComponent />
          <ProfileDropdown />
        </div>
      </div>
      <div>
        <Cards />
      </div>
      <Orders />
    </div>
  );
}

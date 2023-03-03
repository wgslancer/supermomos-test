import {
  CapacityIcon,
  CurrencyIcon,
  DateIcon,
  LocationIcon,
  PictureIcon,
  TimeIcon,
} from "@/components/assets/Icon";
import Box from "@/components/base/Box";
import Container from "@/components/base/Container";
import IconDate from "@/components/base/IconDate";
import IconInput from "@/components/base/IconInput";
import { useState } from "react";
import AddBannerButton from "../AddBannerButton";
import EditTitleInput from "../EditTitleInput";

const CreateSocialForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);

  return (
    <Container className="create-social-form">
      <Box className="create-social-form__container">
        <EditTitleInput defaultValue="Untitled" />
        <Box className="date-group">
          <IconDate
            className="date-input"
            placeholderText="Date"
            selected={date}
            onChange={(date) => date && setDate(date)}
            icon={<DateIcon />}
          />
          <IconDate
            className="time-input"
            placeholderText="Time"
            selected={time}
            onChange={(time) => time && setTime(time)}
            icon={<TimeIcon />}
            showTimeSelect
            showTimeSelectOnly
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </Box>
        <IconInput className="location-input" icon={<LocationIcon />} />
        <Box className="capacity-group">
          <IconInput className="capacity-input" icon={<CapacityIcon />} />
          <IconInput className="cost-input" icon={<CurrencyIcon />} />
        </Box>
      </Box>
      <Box className="add-banner__container">
        <AddBannerButton className="add-banner-btn">
          <PictureIcon />
          <span>Add a banner</span>
        </AddBannerButton>
      </Box>
    </Container>
  );
};

export default CreateSocialForm;

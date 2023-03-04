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
import Input from "@/components/base/Input";
import Label from "@/components/base/Label/Label";
import Tag from "@/components/base/Tag";
import Textarea from "@/components/base/Textarea";
import VariantButton from "@/components/base/VariantButton";
import { FormEvent, useState } from "react";
import AddBannerButton from "../AddBannerButton";
import ChooseBannerModal from "../ChooseBannerModal";
import EditTitleInput from "../EditTitleInput";

const CreateSocialForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showModal, setShowOpen] = useState<boolean>(false);
  const [bannerSrc, setBannerSrc] = useState<string>("");

  const handleOpenModal = () => {
    setShowOpen(true);
  };
  const handleCloseModal = () => {
    setShowOpen(false);
  };

  const handleOnSave = (src: string) => {
    handleCloseModal();
    setBannerSrc(src);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="create-social-form" onSubmit={onSubmit}>
      <Container className="create-social-form-container">
        <Box className="create-social-form__container">
          <EditTitleInput required name="title" defaultValue="Untitled" />
          <Box className="date-group">
            <IconDate
              required
              name="startAt"
              className="date-input"
              placeholderText="Date"
              selected={date}
              onChange={(date) => date && setDate(date)}
              icon={<DateIcon />}
            />
            <IconDate
              required
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
          <IconInput
            name="venue"
            className="location-input"
            icon={<LocationIcon />}
          />
          <Box className="capacity-group">
            <IconInput
              required
              name="capacity"
              className="capacity-input"
              icon={<CapacityIcon />}
            />
            <IconInput
              name="price"
              className="cost-input"
              icon={<CurrencyIcon />}
            />
          </Box>
        </Box>
        <Box className="add-banner__container">
          <AddBannerButton
            type="button"
            value={bannerSrc}
            name="banner"
            className="add-banner-btn"
            onClick={handleOpenModal}
          >
            <PictureIcon />
            <span>Add a banner</span>
          </AddBannerButton>
          <ChooseBannerModal
            show={showModal}
            onClose={handleCloseModal}
            onSave={handleOnSave}
          />
        </Box>
      </Container>
      <Container>
        <Box className="create-social-description-container">
          <Label className="create-social-description-label">Description</Label>
          <Textarea
            className="create-social-description-textarea"
            rows={5}
            cols={10}
            placeholder="Description of your event.."
          />
        </Box>
        <Box className="create-social-description-container">
          <Box className="create-social-setting-group">
            <p className="create-social-setting-group__title">Settings</p>
            <Box className="create-social__checkbox-container">
              <Input type="checkbox" name="isManualApprove" />
              <Label className="create-social__checkbox-label">
                I want to approve attendees
              </Label>
            </Box>
            <p>Privacy</p>
            <Box className="create-social-privacy-group">
              <Box className="radio-privacy-container">
                <Input type="radio" name="privacy" />
                <Label>Public</Label>
              </Box>
              <Box className="radio-privacy-container">
                <Input type="radio" name="privacy" />
                <Label>Curated Audience</Label>
              </Box>
              <Box className="radio-privacy-container">
                <Input type="radio" name="privacy" />
                <Label>Community Only</Label>
              </Box>
            </Box>
            <Box className="create-social-tags-select">
              <p className="title">Tag your social</p>
              <p className="subtitle">
                Pick tags for our curation engine to work its magin
              </p>
              <Box className="tags-container tags-selected-container">
                <Tag selected>Engineering</Tag>
              </Box>
              <Box className="tags-container">
                <Tag>Product</Tag>
                <Tag>Marketing</Tag>
                <Tag>Design</Tag>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="create-social-description-container">
          <VariantButton
            type="submit"
            variant="contained"
            className="create-social-submit-btn"
          >
            Submit
          </VariantButton>
        </Box>
      </Container>
    </form>
  );
};

export default CreateSocialForm;

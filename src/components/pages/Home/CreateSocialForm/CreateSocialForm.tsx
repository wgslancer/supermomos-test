import {
  CapacityIcon,
  CurrencyIcon,
  DateIcon,
  LocationIcon,
  TimeIcon,
} from "@/components/assets/Icon";
import Box from "@/components/base/Box";
import Container from "@/components/base/Container";
import IconDate from "@/components/base/IconDate";
import IconInput from "@/components/base/IconInput";
import Input from "@/components/base/Input";
import Label from "@/components/base/Label/Label";
import Textarea from "@/components/base/Textarea";
import VariantButton from "@/components/base/VariantButton";
import { FormEvent, useCallback, useEffect, useState } from "react";
import BannerModal from "../BannerModal";
import EditTitleInput from "../EditTitleInput";
import TagsSelect from "../TagsSelect";
import { add, format } from "date-fns";
import { SocialFormDataType } from "@/pages";

type FormTargetValue = {
  value: string;
  checked: boolean;
};

type FormTarget<T extends unknown> = {
  [K in keyof T]: FormTargetValue;
};

type CreateSocialFormType = {
  title: string;
  venue: string;
  capacity: string;
  description: string;
  price: string;
  privacy: string;
  isManualApprove: string;
};

interface CreateSocialFormProps {
  handleOnSubmitCreate: (data: SocialFormDataType) => void;
}

const images: Array<string> = [
  "https://images.unsplash.com/photo-1673378165516-35873c36f9e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  "https://images.unsplash.com/photo-1677629323353-20b6836a37d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  "https://images.unsplash.com/photo-1670349148055-e11a0b3be242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1677577441193-6f798ed60b5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  "https://images.unsplash.com/photo-1677827635012-d9c18b4dab68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1804&q=80",
  "https://images.unsplash.com/photo-1677646309413-afbb660967d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1677840806079-232e9ad162e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

const CreateSocialForm = ({ handleOnSubmitCreate }: CreateSocialFormProps) => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [banner, setBanner] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([
    "Product",
    "Marketing",
    "Design",
  ]);
  const [tagsSelected, setTagsSelected] = useState<Array<string>>([
    "Engineering",
  ]);

  const [errorFields, setErrorFields] = useState<Array<string>>([]);

  const onSelectTag = useCallback(
    (tag: string) => {
      const newTags = tags.filter((t) => t !== tag);
      setTagsSelected([...tagsSelected, tag]);
      setTags(newTags);
    },
    [tags, tagsSelected]
  );

  const onRemoveTag = useCallback(
    (tag: string) => {
      const newSelectedTag = tagsSelected.filter((t) => t !== tag);
      setTags([...tags, tag]);
      setTagsSelected(newSelectedTag);
    },
    [tags, tagsSelected]
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      title,
      venue,
      capacity,
      description,
      price,
      privacy,
      isManualApprove,
    } = e.target as unknown as FormTarget<CreateSocialFormType>;

    if (banner === "") {
      setErrorFields([...errorFields, "banner"]);
      return;
    }

    if (tagsSelected.length < 1) {
      setErrorFields([...errorFields, "tags"]);
      return;
    }

    fetch("/api/createSocial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        venue: venue.value,
        capacity: Number(capacity.value),
        price: Number(price.value),
        privacy: privacy.value,
        description: description.value,
        banner: banner,
        tags: tagsSelected,
        isManualApprove: isManualApprove.checked,
        startAt: add(date!, {
          hours: time?.getHours(),
          minutes: time?.getMinutes(),
        }).toISOString(),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        handleOnSubmitCreate(data);
        return data;
      })
      .catch(() => {
        setErrorFields([...errorFields, "submit-error"]);
      });
  };

  return (
    <form className="create-social-form" onSubmit={onSubmit}>
      <Container className="create-social-form-container">
        <Box className="create-social-form__container">
          <EditTitleInput required name="title" defaultValue="Untitled" />
          <Box className="date-group">
            <IconDate
              required
              name="date"
              className="date-input"
              placeholderText="Date"
              selected={date}
              onChange={(date) => date && setDate(date)}
              icon={<DateIcon />}
            />
            <IconDate
              required
              name="time"
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
            placeholder="Venue"
            className="location-input"
            icon={<LocationIcon />}
          />
          <Box className="capacity-group">
            <IconInput
              required
              type="number"
              placeholder="Max capacity"
              name="capacity"
              className="capacity-input"
              icon={<CapacityIcon />}
            />
            <IconInput
              name="price"
              type="number"
              placeholder="Cost per person"
              className="cost-input"
              icon={<CurrencyIcon />}
            />
          </Box>
        </Box>
        <BannerModal
          error={errorFields.includes("banner")}
          bannerSrc={banner}
          setBannerSrc={setBanner}
          images={images}
        />
      </Container>
      <Container>
        <Box className="create-social-description-container">
          <Label className="create-social-description-label">Description</Label>
          <Textarea
            required
            name="description"
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
                <Input type="radio" value="Public" name="privacy" required />
                <Label>Public</Label>
              </Box>
              <Box className="radio-privacy-container">
                <Input
                  type="radio"
                  value="Curated Audience"
                  name="privacy"
                  required
                />
                <Label>Curated Audience</Label>
              </Box>
              <Box className="radio-privacy-container">
                <Input
                  type="radio"
                  value="Community Only"
                  name="privacy"
                  required
                />
                <Label>Community Only</Label>
              </Box>
            </Box>
            <TagsSelect
              onRemoveTag={onRemoveTag}
              onSelectTag={onSelectTag}
              tagsSelected={tagsSelected}
              tags={tags}
            />
          </Box>
        </Box>
        <Box className="create-social-description-container">
          {!!errorFields.length ? (
            <Box className="error-message">
              <p>please choose {errorFields.join(", ")}</p>
            </Box>
          ) : null}
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

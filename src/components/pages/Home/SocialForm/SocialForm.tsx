import {
  CapacityIcon,
  CurrencyIcon,
  DateIcon,
  LocationIcon,
  TimeIcon,
} from "@/components/assets/Icon";
import Box from "@/components/base/Box";
import Container from "@/components/base/Container";
import IconBox from "@/components/base/IconBox";
import { SocialFormDataType } from "@/pages";
import Image from "next/image";
import { format } from "date-fns";
import { useMemo } from "react";

interface SocialFormProps extends SocialFormDataType {}

const SocialForm = ({
  title,
  banner,
  capacity,
  description,
  price,
  startAt,
  venue,
}: SocialFormProps) => {
  console.log();
  const date = useMemo(
    () => format(new Date(startAt), "MMMM dd, EEE"),
    [startAt]
  );

  const time = useMemo(() => format(new Date(startAt), "h aa"), [startAt]);

  return (
    <Container className="social-form-container">
      <Box className="social-form-content-container">
        <h1>
          <span className="social-form-title">{title}</span>
        </h1>
        <Box className="social-form-date">
          <IconBox variant="title" icon={<DateIcon />}>
            {date}
          </IconBox>
          <IconBox variant="title" icon={<TimeIcon />}>
            {time}
          </IconBox>
        </Box>
        <IconBox
          className="social-form-venue"
          variant="subtitle"
          icon={<LocationIcon />}
        >
          {venue}
        </IconBox>

        <Box className="social-form-addition-information">
          <IconBox variant="subtitle" icon={<CapacityIcon />}>
            {capacity} People
          </IconBox>
          <IconBox variant="subtitle" icon={<CurrencyIcon />}>
            ${price}
          </IconBox>
        </Box>

        <Box className="social-form-description">
          <p className="description">{description}</p>
        </Box>
      </Box>
      <Image
        className="social-form-banner-img"
        src={banner}
        alt=""
        width={739}
        height={445}
      />
    </Container>
  );
};

export default SocialForm;

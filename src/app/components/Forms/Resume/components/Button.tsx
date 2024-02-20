import { cx } from "lib/cx";
import { Tooltip } from "components/Tooltip";

import {
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  ChevronUp,
  LucideTrash,
  ListIcon,
} from "lucide-react";

type ReactButtonProps = React.ComponentProps<"button">;
type ReactAnchorProps = React.ComponentProps<"a">;
type ButtonProps = ReactButtonProps | ReactAnchorProps;

const isAnchor = (props: ButtonProps): props is ReactAnchorProps => {
  return "href" in props;
};

export const Button = (props: ButtonProps) => {
  if (isAnchor(props)) {
    return <a {...props} />;
  } else {
    return <button type="button" {...props} />;
  }
};

export const PrimaryButton = ({ className, ...props }: ButtonProps) => (
  <Button className={cx("btn-primary", className)} {...props} />
);

type IconButtonProps = ButtonProps & {
  size?: "small" | "medium";
  tooltipText: string;
};

export const IconButton = ({
  className,
  size = "medium",
  tooltipText,
  ...props
}: IconButtonProps) => (
  <Tooltip text={tooltipText}>
    <Button
      type="button"
      className={cx(
        "rounded-full outline-none hover:bg-gray-100 focus-visible:bg-gray-100",
        size === "medium" ? "p-1.5" : "p-1",
        className
      )}
      {...props}
    />
  </Tooltip>
);

export const ShowIconButton = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (show: boolean) => void;
}) => {
  const tooltipText = show ? "Hide Section" : "Show Section";
  const onClick = () => {
    setShow(!show);
  };
  const Icon = show ? ChevronUp : ChevronDown;

  return (
    <IconButton onClick={onClick} tooltipText={tooltipText}>
      <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};

type MoveIconButtonType = "up" | "down";
export const MoveIconButton = ({
  type,
  size = "medium",
  onClick,
}: {
  type: MoveIconButtonType;
  size?: "small" | "medium";
  onClick: (type: MoveIconButtonType) => void;
}) => {
  const tooltipText = type === "up" ? "Move up" : "Move down";
  const sizeClassName = size === "medium" ? "h-6 w-6" : "h-4 w-4";
  const Icon = type === "up" ? ArrowUp : ArrowDown;

  return (
    <IconButton
      onClick={() => onClick(type)}
      tooltipText={tooltipText}
      size={size}
    >
      <Icon className={`${sizeClassName} text-gray-400`} aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};

export const DeleteIconButton = ({
  onClick,
  tooltipText,
}: {
  onClick: () => void;
  tooltipText: string;
}) => {
  return (
    <IconButton className="hover:text-red-600" onClick={onClick} tooltipText={tooltipText} size="small">
      <LucideTrash className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};

export const BulletListIconButton = ({
  onClick,
  showBulletPoints,
}: {
  onClick: (newShowBulletPoints: boolean) => void;
  showBulletPoints: boolean;
}) => {
  const tooltipText = showBulletPoints
    ? "Hide bullet points"
    : "Show bullet points";

  return (
    <IconButton
      onClick={() => onClick(!showBulletPoints)}
      tooltipText={tooltipText}
      size="small"
      className={showBulletPoints ? "!bg-sky-100" : ""}
    >
      <ListIcon
        className={`h-4 w-4 ${
          showBulletPoints ? "text-gray-700" : "text-gray-400"
        }`}
        aria-hidden="true"
      />
      <span className="sr-only">{tooltipText}</span>
    </IconButton>
  );
};

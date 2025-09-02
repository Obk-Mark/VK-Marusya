type IconType = {
    name: string;
    width: number;
    height: number;
}

export type ButtonProps = {
    handleClick?: () => void;
    classNames?: string;
    text?: string;
    icon?: IconType; 
    ariaLabel?: string;
    type?: "button" | "submit" | "reset" | undefined;
}
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export function ThemeSwitcher() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	const dark = colorScheme === "dark";

	return (
		<ActionIcon
			maw={20}
			variant="outline"
			color={dark ? "yellow" : "blue"}
			onClick={() => toggleColorScheme()}
			title="Změnit motiv"
		>
			{dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
		</ActionIcon>
	);
}

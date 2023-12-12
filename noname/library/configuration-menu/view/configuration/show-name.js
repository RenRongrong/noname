export const SHOW_NAME = {
	name: "显示角色名称",
	init: false,
	unfrequent: true,
	onclick(bool) {
		game.saveConfig("show_name", bool);
		if (bool) {
			ui.arena.classList.remove("hide_name");
		}
		else {
			ui.arena.classList.add("hide_name");
		}
	}
};

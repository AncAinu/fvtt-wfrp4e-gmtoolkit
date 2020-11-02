/* Unified macro to run for end of session admin.
 * Automatically fires up other macros.
 * Affects actors according to the criteria of individual macros.
 * Add XP and Reset Fortune both require player characters to be targeted.
 */ 

endSession();

async function endSession () {
    if (!game.user.isGM) {
        ui.notifications.error(game.i18n.localize('GMTOOLKIT.Message.SessionEnd.NoPermission'), {});
    }

    await game.macros.getName("Add XP").execute();
    await game.macros.getName("Reset Fortune").execute();

    await game.togglePause(true);

   /* if (game.settings.get("wfrp4e-gm-toolkit", "exportChat")) {
        game.messages.export();
    };*/
};

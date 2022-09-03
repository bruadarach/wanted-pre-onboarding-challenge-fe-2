/**
 * Todo {}
 * @typedef {Object} Todo
 * @property {number} id - required
 * @property {string} content - required
 * @property {boolean} isDone - required
 * @property {string} category - required
 * @property {Array.<string>} [tags] - optional
 */

/**
 * This function will make a user create a task.
 * A task must include the required to be created.
 * @param {number} id The ID of a task
 * @param {string} content The content of a task
 * @param {boolean} isDone Whether a task is done
 * @param {string} category The category of a task
 * @param {Array.<string>} [tags] Keyword(s) of a task
 */
function CREATE({ id, content, isFinished, category, tags }) {}

/**
 * This function will display the list(s) of task(s).
 * Based on ID, it is possible to search a certain task.
 * @param {number} [id] A selected task based on ID will be displayed. Otherwise, all tasks will be displayed.
 * @return {Todo|Array.<Todo>} An Array of a selected task based on ID will be returned. Otherwise, an Array of all tasks will be returned.
 */
function READ() {}

/**
 * This function will make a user available to edit/update the detail(s) of a task.
 * Except for ID, it is possible to edit/update, including tag(s) of a certain task.
 * @param {number} id NOT possible to update
 * @param {string} content Update the content of a task
 * @param {boolean} isDone Update whether a task is done
 * @param {string} category Update the category of a task
 * @param {Array.<string>} tags Update the tag(s) of a task
 */
function UPDATE(id, content, isFinished, category, tags) {}

/**
 * This function will make a user available to remove a certain or all tasks.
 * @param {number} [id]  A selected task based on ID will be removed. In addition, all tasks can be removed at one go.
 * @param {Array.<string>} [tags]  Tag(s) on a task can be removed.
 */
function DELETE(id, tags) {}

/**
 * 할 일을 추가하는 함수<br>
 * 내용없이 추가할 수 없다.
 * @param {number} id - 유저의 아이디
 * @param {string} content - 내용
 * @param {boolean} isCompleted - 완료 여부
 * @param {string} category - 카테고리
 * @param {string | string[]} [tags] - 태그(들)
 */
function createTodo(id, content, isCompleted, category, tags) {}

/**
 * 모든 할 일을 조회하는 함수<br>
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {number} id - 유저의 아이디
 */
function readTodos(id) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있는 함수<br>
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {number} todoId - 할 일의 아이디
 * @param {string} content - 내용
 * @param {boolean} [isCompleted] - 완료 여부
 * @param {string} [category] - 카테고리
 * @param {string | string[]} [tags] - 태그(들)
 */
function updateTodo(id, content, isCompleted, category, tags) {}

/**
 * ID를 기반으로 특정 할 일을 삭제하는 함수<br>
 * 모든 할 일을 제거할 수 있다.<br>
 * 특정 할 일의 특정 태그를 삭제할 수 있다.<br>
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {number} id - 유저의 아이디
 * @param {number} [todoId] - 할 일의 아이디
 * @param {number} [tagId] - 태그의 아이디
 * @param {boolean} [deleteAllTags] - 모든 태그 삭제 여부
 */
function deleteTodo(id, todoId, tagId, deleteAllTags) {}

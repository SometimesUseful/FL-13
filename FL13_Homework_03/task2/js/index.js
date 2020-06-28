const $list = $(".list");
const $input = $("#add-input");
// const $add = $("#add-submit");


// const todos = [
//   {
//     text: "Buy milk",
//     done: false
//   },
//   {
//     text: "Play with dog",
//     done: true
//   }
// ];
$.fn.toDoList = function() {
  $(document).ready(function () {
    $list.html(localStorage.getItem('listItems'));
    $('.add-new-task').submit(function (event) {
      event.preventDefault();
      let item = $input.val();
      if ($input) {
        $list.append(
            '<li><input class="checkbox" type="checkbox" />' + item +
            '<a class="remove">x</a><hr></li>');
        localStorage.setItem('listItems', $list.html());
        $input.val('');
      }
    });
    $(document).on('change', '.checkbox', function () {
      if ($(this).attr('checked')) {
        $(this).removeAttr('checked');
      } else {
        $(this).attr('checked', 'checked');
      }
      $(this).parent().toggleClass('completed');
      localStorage.setItem('listItems', $list.html());
    });

    $(document).on('click', '.remove', function () {
      $(this).parent().remove();
      localStorage.setItem('listItems', $list.html());
    });
  });
};
$(document).toDoList();



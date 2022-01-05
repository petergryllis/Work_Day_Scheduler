var today = moment();
$("#1a").text(today.format('LLLL'));

var taskItemFILL = $('#taskItem');

function handletaskentry(event){
    event.preventDefault();

    var taskENTRY = $('input [name="task-input"]').val();

    if(!taskENTRY) {
        console.log('No task entered');
        return;
    }

    var taskEntryElement = $(
        '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
    );
    taskEntryElement.text(taskENTRY);

    taskItemFILL.append(taskEntryElement);

    $('input[name="task-input"]').val('');
}
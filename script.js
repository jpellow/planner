$(document).ready(function () {

    load();
    function load(){
        localStorage.setItem("e10", "do things");
        var date = $("<div>").text(moment().format('dddd Do MMMM'));
        date.addClass("display-5 time")
        $(".display-5").append(date);
        console.log(moment().format('h'));

        for (i=9; i < 18; i++){
        var newRow = $("<div>").addClass("row");
        var hour = $("<div>").addClass("col-1 text-right");
        var task = $("<input>").addClass("col-10 form-control");
        var save = $("<button>").addClass("btn btn-info col-1 text-center");
        hour.attr("id", "hour");
        task.attr({id: "task", type:"text", data: "e"+i});
        task.addClass("live");
        task.val(localStorage.getItem("e"+i))
        save.attr({type: "button", id: "save", data: "e"+i});
        save.text("Save");
        if(i >= 12){
            if (i === 12){
                hour.text(i + "PM");
            }
            else{
            hour.text((i - 12) + "PM");
            }
        }
        else{
            hour.text(i + "AM");
        }
        if (i < moment().format('h')){
            task.addClass("dead");
        }
        else if (i == moment().format('h')){
            task.addClass("current");
        }
        $("#hourRows").append(newRow);
        $(newRow).append(hour, task, save);
        // $(newRow).append(task);
        // $(newRow).append(save);
        };
        // i++
    }
    $(document).on("click", "#save", saveTask);
    function bgColor(){
        
    }

    function saveTask(){
        var data = $(this).attr("data");
        var task = $("input[data="+data+"]").val();
        localStorage.setItem(data, task);
    }
    
});

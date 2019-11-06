$(document).ready(function () {

    load();
    function load(){
        for (i=9; i < 18; i++){
        var newRow = $("<div>").addClass("row");
        var hour = $("<div>").addClass("col-1 text-right");
        var task = $("<input>").addClass("col-10 form-control");
        var save = $("<button>").addClass("btn btn-info col-1 text-center");
        hour.attr("id", "hour");
        task.attr({id: "task", type:"text"});
        save.attr({type: "button", id: "save"});
        save.text("Save");
        if(i > 12){
            hour.text((i - 12) + "PM");
        }
        else{
            hour.text(i + "AM");
        }
        $("#hourRows").append(newRow);
        $(newRow).append(hour);
        $(newRow).append(task);
        $(newRow).append(save);
        };
        i++
    }
});

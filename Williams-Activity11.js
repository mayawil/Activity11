//!-- jQuery call to the accordion() method.
$(document).ready(function() {
    $("#accordion").accordion({
        // can click on each accordian
        event: "click",
        // will be as tall as its content
        heightStyle: "content",
        // all can be collapsed
        collapsible: "false",
    });
});
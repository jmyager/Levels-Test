// Array to hold all of our states and id's to cross check
const states = [{
        state: "Select State",
        id: "default"
    },
    {
        state: "Alabama",
        id: "al"
    },
    {
        state: "Arizona",
        id: "az"
    },
    {
        state: "California",
        id: "ca"
    },
    {
        state: "Colorado",
        id: "co"
    },
    {
        state: "Florida",
        id: "fl"
    },
    {
        state: "Georgia",
        id: "ga"
    },
    {
        state: "Indiana",
        id: "in"
    },
    {
        state: "Iowa",
        id: "ia"
    },
    {
        state: "Kansas",
        id: "ka"
    },
    {
        state: "Kentucky",
        id: "ky"
    },
    {
        state: "Louisiana",
        id: "la"
    },
    {
        state: "Minnesota",
        id: "mn"
    },
    {
        state: "Missouri",
        id: "mo"
    },
    {
        state: "Mississippi",
        id: "ms"
    },
    {
        state: "Nevada",
        id: "nv"
    },
    {
        state: "North Carolina",
        id: "nc"
    },
    {
        state: "New Mexico",
        id: "nm"
    },
    {
        state: "New York",
        id: "ny"
    },
    {
        state: "Oklahoma",
        id: "ok"
    },
    {
        state: "Pennsylvania",
        id: "pa"
    },
    {
        state: "South Carolina",
        id: "sc"
    },
    {
        state: "Tennessee",
        id: "tn"
    },
    {
        state: "Texas",
        id: "tx"
    },
    {
        state: "Virginia",
        id: "va"
    },
    {
        state: "West Virginia",
        id: "wv"
    },
    {
        state: "Wisconsin",
        id: "wi"
    }
]

// Dynamically create options in our dropdown
for (var i = 0; i < states.length; i++) {
    var stateOption = $("<option>");
    stateOption.attr("id", "option-" + i + 1);
    $("#optionWell").append(stateOption);
    $("#option-" + i + 1).append(states[i].state);
};

// Hide all states on main page
$(".stateContainer").hide();

// When an option is selected and user presses view button
// Hide all states, except the one user has selected
$("button").on("click", function () {
    var stateSelected = $('#optionWell option').filter(':selected').text();
    window.location.href = window.location.origin + "/states/" + stateSelected;
    $(".stateContainer").hide();
})

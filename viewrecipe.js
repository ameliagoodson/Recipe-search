var APIKey = "96aa363d6b8b4e798af15863b16aaf0e";
renderRecepie();

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}

function renderRecepie() {
    var recepieID = getUrlParameter("recepie-id");
    var queryURL = "https://api.spoonacular.com/recipes/" + recepieID + "/information?includeNutrition=false&apiKey=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#recipetitle").text(response.title);
        $("#RecipeImage").attr("src", (response.image));
        checkproperty(response.vegetarian, "#vegetarian");
        checkproperty(response.vegan, "#vegan");
        checkproperty(response.glutenFree, "#gluten3");
        checkproperty(response.dairyFree, "#dairy3");
        $("#recipeSummary").html(response.summary);
        var instructions = (response.instructions);
        var splitInstructions = instructions.split(".");
        for (i = 0; i < splitInstructions.length; i ++) {
            if (splitInstructions[i] !== "") {
                var ins = $("<li>");
                ins.text(splitInstructions[i]);
                $("#instructions").append(ins);
            }
        }
        var ingredients = (response.extendedIngredients);
        for (i = 0; ingredients.length; i ++) {
            var ingre = $("<li>");
            ingre.text(ingredients[i].name)
            $("#ingredients").append(ingre);
        }
    });
   

}

function checkproperty(property, container) {
    if (property) {
        $(container).prop("checked", true);
    } else {
        $(container).prop("checked", false);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> c0b1d296ab3e9435c68508f754eeae1b7efa332f

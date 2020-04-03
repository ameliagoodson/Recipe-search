
var ingredientArray = [];
var txtSearchIngredient = $("#searchIngredient").val()
var APIKey = "6464a1cfe1e941be95898521860bc5df" //"96aa363d6b8b4e798af15863b16aaf0e"
var queryParams = getQueryParams();

function getQueryParams() {
    var queryParams = "";
    for (var i = 0; i < ingredientArray.length; i++) {
        if (i == 0) {
            queryParams += ingredientArray[i];
        } else {
            queryParams += ",+" + ingredientArray[i];
        }

    }
    return queryParams;
}

$("#form").submit(function (event) {
    event.preventDefault();
})


function addNewIngredient() {
    $('#addBtn').on('click', function (event) {
        event.preventDefault();
        txtSearchIngredient = $("#searchIngredient").val()
        if (txtSearchIngredient.length === 0) {
            $("#searchIngredient").attr("placeholder", "Please type an ingredient.")
            return
        } else {
            $("#searchIngredient").val("")
            $("#searchIngredient").attr("placeholder", "Ingredient added to list!")
            ingredientArray = txtSearchIngredient.split(",")
            for (i = 0; i < ingredientArray.length; i++) {
                var newFood = $('<button>')
                newFood.text(ingredientArray[i].trim())
                $("#selectFood").append(newFood)
            }
        }
    })
}
addNewIngredient()

function searchIngredients() {

    $('#searchBtn').on('click', function () {
        event.preventDefault();
        if (validateSearch()) {
            var queryParams = getQueryParams();
        var queryParams = getQueryParams();
        
        var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + queryParams + "&number=4&limitLicense=true&ranking=1" + "&apiKey=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log("response: " + JSON.stringify(response));
            localStorage.setItem("searchResults", JSON.stringify(response));
            window.location.href = "./SearchResultPage.html";
        });
        }
    }
    )
}
searchIngredients()

function validateSearch() {
    var validateInput = true;
    if (ingredientArray.length == 0) {
        validateInput = false;
        alert("Please enter the ingredients to search");
    }
    return validateInput;
}
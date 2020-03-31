
var ingredientArray = [];
var txtSearchIngredient = $("#searchIngredient").val()
var APIKey = "96aa363d6b8b4e798af15863b16aaf0e"
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
        if (txtSearchIngredient.length === 0 ) {
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
        }}
    })
}
addNewIngredient()

function searchIngredients() {
    
    $('#searchBtn').on('click', function () {
        event.preventDefault();
        var queryParams = getQueryParams();
        
        var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + queryParams + "&number=2" + "&apiKey=" + APIKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log("response: " + JSON.stringify(response));
            localStorage.setItem("searchResults", JSON.stringify(response));
            window.location.href = "./SearchResultPage.html";
        });

    })
}
searchIngredients()





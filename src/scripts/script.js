function addExpence() {
    const price = parseInt($(".input-price").val());
    const name = $(".input-text").val();

    $(".input-text").val("") 
    $(".input-price").val("")
    
    if(isNaN(price) || name == "" ){
        return
    }

    oldtotal = $(".total-price").html()
    newtotal = parseInt(oldtotal) + price
    $(".total-price").html(newtotal)

    const newRow = `
        <div class="expenses-row">
          <div class="expense">${name}</div>
          <div class="price">${price}</div>
          <div class="delete-container">
            <div class="delete">
              <span> - </span>
            </div>
          </div>
        </div>`;
      $(".expense-table").append(newRow);

  }
  
  $(document).ready(function () {

    const addButton = $(".add-button");
    addButton.click(addExpence);



    $(".expense-table").on("click", ".delete", function () {

        const oldTotal = parseInt($(".total-price").html())
        const priceOfItem = parseInt($(this).closest(".expenses-row").find(".price").text())
        $(".total-price").html(oldTotal-priceOfItem)
        $(this).closest(".expenses-row").remove()

      });

  });
import "./payment.css"

const Payment = () => {
    return (
        <div className="payment">
          <div className="payment-logo">
            <img src="Amazon_Logo.png" alt="Amazon Logo" /> 
          </div>
           <div className="payment-section">
              <h2>Payment Method</h2>
              <div className="pay-section">
                <div className="payment-methods">
                  <form>
                      <div className="method-1">
                        <input type="radio" id="card" name="method"/>
                        <h4>Add Debit/Credit/ATM Card</h4>
                      </div>
                      <br />
                      <div className="method-2">
                        <input type="radio" id="net-banking" name="method"/>
                        <h4>Net Banking</h4>
                      </div>  
                      <select name="" id="option" value="m">
                        <option >Bank Of Baroda</option>
                        <option >HDFC Bank</option>
                        <option >ICICI Bank</option>
                        <option >SBI Bank</option>
                      </select>
                      <br />
                      <div className="method-3">
                        <input type="radio" id="cod" name="method"/>
                        <h4>Cash On Delivery</h4>
                      </div>
                  </form>
                  </div>
              </div>
                <div className="pay">
                  <button className="pay-btn">Pay </button>
                </div>
            
           </div>
        </div>
    )
}

export default Payment

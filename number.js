class Dnumber{
    constructor(ep, number){
        if(!ep) return
        this.number = undefined
        this.numbers = []
        this.create(ep)
        this.update(number)
    }
    create(ep){
        const wrapper = document.createElement("div")
        wrapper.classList.add("digitCnt")
        ep.append(wrapper)
        this.cnt = wrapper
    }
    update(number){
        if(typeof number === "number") number = number.toString()
        
        if(typeof number !== "string") return   

        if(this.number === number){
            //if its the same number
            return
        }

        this.number = number

        const digits = this.cnt.querySelectorAll("div.digit")

        if(digits.length === 0){
            //initialize
            for(const idx in number){
                const digit = this._createDigit()
                this.cnt.appendChild(digit)
                this._updateDigit(digit, number[idx])
            }
        }else if(digits.length === number.length){
            //nothing
        }else{
            let diff = 0
            if(digits.length < number.length){
                //sube
                diff = number.length - digits.length
                for(let idx = 0; idx < diff; idx++){
                    const digit = this._createDigit()
                    this.cnt.appendChild(digit)
                }
            }else{
                //baja
                diff = digits.length - number.length
                for(let idx = 0; idx < diff; idx++){
                    digits[digits.length - idx - 1].remove()
                }
            }
        }

        //update
        this.cnt.querySelectorAll("div.digit").forEach((digit, idx)=>{
            this._updateDigit(digit, number[idx])
        })

    }
    _createDigit(){
        const digit = document.createElement("div")
        digit.classList.add("digit")
        for(let idx = 0; idx < 10; idx++){
            const nmb = document.createElement("span")
            nmb.innerText = idx
            digit.append(nmb)
        }
        return digit
    }
    _updateDigit(number, newValue){
        number.setAttribute("style", `transform: translateY(calc((1em + 10px) * ${newValue} * -1));`)
    }
    destroy(){
        //to do
    }
}

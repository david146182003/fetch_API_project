import { imgInputEl } from "./script.js";

export const vaildation = ()=>{
    if(imgInputEl.value.indexOf(" ")>=0 && inputElement.value.trim()==="") {
        alert("Input cannot contain only spaces");
        return false;
    }
}
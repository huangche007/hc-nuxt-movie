
export default ({ app }, inject) => {
    // Set the function directly on the context.app object
    app.dealNamesToStr  = (data,arr,nameFlag) => {
        if(arr.length===1){
            data[nameFlag] = arr[0].name;
        }else{
            let dirName = '';
            arr.forEach((item) => {dirName+=`${item.name} / `});
            data[nameFlag] = dirName.substr(0,dirName.length-2);
        }
    }
  }
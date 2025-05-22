export default class ModelCities{
    URL ="https://docs.google.com/spreadsheets/d/e/2PACX-1vSJqx9YWFdMyP5CSDbXOXi2NgVLxx63YnPs2jD9Z9SXOW0XIDPlhYvgfgdQSVUaHJcp-hMECb8ToCqg/pub?gid=0&single=true&output=tsv";
    SEP_LINE = '\r\n';
    SEP_CELL = '\t';

    loadData(){
        return fetch(this.URL).then(r => r.text());
    }

    parseData(d){
        const tableArr = d.split(this.SEP_LINE).map(r=> r.split(this.SEP_CELL));
        const names = tableArr.shift();

        const formatData = tableArr.map( el =>{
            const city = {};
            names.forEach((name,i)=>city[name]= el[i]);
            return city;
        });

        this.formatData = this.formatData;
        this.names = names

        return{ names, formatData };
    }

}
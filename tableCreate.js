function tableCreate(thead, tbody, tableId, parent) {
        if (!parent) parent = document.getElementsByTagName('body')
        if (!tableId) tableId = 'tableId'
        if (!tbody) tbody = [
            []
        ]
        let tbl = document.createElement("table");
        tbl.setAttribute("id", tableId.toString());
        tbl.setAttribute("class", 'AStable');

        let tbdy = document.createElement("tbody");
        let tbhd = document.createElement("thead");
        let tr = document.createElement("tr");

        //header

        thead.forEach((cell) => {
            let th = document.createElement("th");
            th.appendChild(document.createTextNode(cell));
            tr.appendChild(th);
            tbhd.appendChild(tr);
        });
        tbl.appendChild(tbhd);

        //tbody

        tbody.forEach((row) => {
            let tr = document.createElement("tr");
            row.forEach((cell) => {
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(cell));
                tr.appendChild(td);
            });
            tbdy.appendChild(tr);
        });
        tbl.appendChild(tbdy);

        let tablePos;
        Array.prototype.slice.call(parent[0].childNodes).forEach((el, i) => {
            if (el.id == tableId) tablePos = i;
        });
        tablePos
            ?
            parent[0].replaceChild(tbl, parent[0].childNodes[tablePos]) :
            parent[0].appendChild(tbl);
    }

$(() => {


    function toggleExpanded(element, show) {
        var target = document.getElementById(element.getAttribute('aria-controls'));

        if (target) {
            element.setAttribute('aria-expanded', show);

            // Adjust the text of the toggle button
            if (show) {
                element.innerHTML = element.getAttribute('data-shown-text');
            } else {
                element.innerHTML = element.getAttribute('data-hidden-text');
            }

            target.setAttribute('aria-hidden', !show);
        }
    }

    /**
        Attaches event listeners for the expandable table open and close click events.
        @param {HTMLElement} table The expandable table container element.
      */
    function setupExpandableTable(table) {
        // Set up an event listener on the container so that panels can be added
        // and removed and events do not need to be managed separately.
        table.addEventListener('click', function(event) {
            var target = event.target;
            var isTargetOpen = target.getAttribute('aria-expanded') === 'true';

            if (target.classList.contains('u-toggle')) {
                // Toggle visibility of the target panel.
                toggleExpanded(target, !isTargetOpen);
            }
        });
    }

    // Setup all expandable tables on the page.
    var tables = document.querySelectorAll('.expand-table');

    for (var i = 0, l = tables.length; i < l; i++) {
        setupExpandableTable(tables[i]);
    }


    /**
     * Sorts a table by the column specified.
     * @param {HTMLElement} header Sortable header element that was clicked.
     * @param {HTMLTableElement} table Table to sort.
     */
    function sortTable(header, table) {
        var SORTABLE_STATES = {
            none: 0,
            ascending: -1,
            descending: 1,
            ORDER: ['none', 'ascending', 'descending'],
        };

        // Get index of column based on position of header cell in <thead>
        // We assume there is only one row in the table head.
        var col = [].slice.call(table.tHead.rows[0].cells).indexOf(header);

        // Based on the current aria-sort value, get the next state.
        var newOrder = SORTABLE_STATES.ORDER.indexOf(header.getAttribute('aria-sort')) + 1;
        newOrder = newOrder > SORTABLE_STATES.ORDER.length - 1 ? 0 : newOrder;
        newOrder = SORTABLE_STATES.ORDER[newOrder];

        // Reset all header sorts.
        var headerSorts = table.querySelectorAll('[aria-sort]');

        for (var i = 0, ii = headerSorts.length; i < ii; i += 1) {
            headerSorts[i].setAttribute('aria-sort', 'none');
        }

        // Set the new header sort.
        header.setAttribute('aria-sort', newOrder);

        // Get the direction of the sort and assume only one tbody.
        // For this example only assume one tbody.
        var direction = SORTABLE_STATES[newOrder];
        var body = table.tBodies[0];

        // Convert the HTML element list to an array.
        var newRows = [].slice.call(body.rows, 0);

        // If the direction is 0 - aria-sort="none".
        if (direction === 0) {
            // Reset to the default order.
            newRows.sort(function(a, b) {
                return a.getAttribute('data-index') - b.getAttribute('data-index');
            });
        } else {
            // Sort based on a cell contents
            newRows.sort(function(rowA, rowB) {
                // Trim the cell contents.
                var contentA = rowA.cells[col].textContent.trim();
                var contentB = rowB.cells[col].textContent.trim();

                // Based on the direction, do the sort.
                //
                // This example only sorts based on alphabetical order, to sort based on
                // number value a more specific implementation would be needed, to provide
                // number parsing and comparison function between text strings and numbers.
                return contentA < contentB ? direction : -direction;
            });
        }
        // Append each row into the table, replacing the current elements.
        for (i = 0, ii = body.rows.length; i < ii; i += 1) {
            body.appendChild(newRows[i]);
        }
    }

    function setupClickableHeader(table, header) {
        header.addEventListener('click', function() {
            sortTable(header, table);
        });
    }

    /**
     * Initializes a sortable table by assigning event listeners to sortable column headers.
     * @param {HTMLTableElement} table
     */
    function setupSortableTable(table) {
        // For this example, assume only one tbody.
        var rows = table.tBodies[0].rows;
        // Set an index for the default order.
        for (var row = 0, totalRows = rows.length; row < totalRows; row += 1) {
            rows[row].setAttribute('data-index', row);
        }

        // Select sortable column headers.
        var clickableHeaders = table.querySelectorAll('th[aria-sort]');
        // Attach the click event for each header.
        for (var i = 0, ii = clickableHeaders.length; i < ii; i += 1) {
            setupClickableHeader(table, clickableHeaders[i]);
        }
    }

    // Make all tables on the page sortable.
    var tables = document.querySelectorAll('table');

    for (var i = 0, ii = tables.length; i < ii; i += 1) {
        console.debug("hi")
        console.debug(tables[i])
        setupSortableTable(tables[i]);
    }

    // Highlight table starts here
    // the biggest difference is the fact that this table has only one column to compare against, whereas the other one had two

    // Utils

    function getAll(selector, parent = document) {
        return Array.prototype.slice.call(parent.querySelectorAll(selector), 0);
    }


    Array.prototype.diff = function(a) {
        return this.filter(function(i) {
            return a.indexOf(i) < 0;
        });
    };
    /**
     * searchTable()
     * @param #search_table input 
     * @param .expand-table 
     * @date 2021-12-26
     * @returns {any}
     */
    function searchTable() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("search_table");
        filter = input.value.toUpperCase();
        console.debug(filter)
        table = document.querySelector(".expand-table");
        tr = table.getElementsByTagName("tr");

        // Loop through all table rows, and hide those who don't match the search query
        for (i = 1; i < tr.length; i++) {
            // Hide the row initially.
            tr[i].style.display = "none";

            td = tr[i].getElementsByTagName("td");
            for (var j = 0; j < td.length; j++) {
                cell = tr[i].getElementsByTagName("td")[j];
                if (cell) {
                    if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    }
                }
            }
        }

    }


    /**
     * #highlight_toggle
     * @date 2021-12-26
     * @param {any} "#highlight_toggle"
     * @returns {any}
     */
    $("#highlight_toggle").click(function(event) {
        let checkClass = $("table").hasClass("highlight-table")
        // console.debug(event.target)
        // // if it's not checked
        // if (!$("#highlight_toggle").attr("checked", true)) {
        //     console.debug("doesn't have checked")
        //     // remove checked 
        //     $("#highlight_toggle").removeAttr("checked")
        // } else {
        //     $("#highlight_toggle").attr("checked", true)
        // }
        if (checkClass) {
            console.debug("removing class")
            $("table").removeClass("highlight-table")
        } else {
            $("table").addClass("highlight-table")
            highlightTrigger(".highlight-table")
        }

    })


    /**
     * highlightTrigger
     * @description resets highlight
     * @date 2021-12-26
     * @param {any} classname
     * @returns {any}
     */
    function highlightTrigger(classname) {
        const highlightTables = getAll(classname);
        highlightTables.forEach((highlightEl) => {
            const highlightRows = getAll('tbody tr', highlightEl);
            const highlightCells = getAll('tbody td', highlightEl);
            const highlightValues = getAll('tfoot th', highlightEl);

            highlightEl.addEventListener('mouseleave', () => {
                resetTable(highlightCells, highlightValues);
            });

            highlightCells.forEach((el) => {
                el.addEventListener('mouseenter', () => {
                    console.debug("mouse enter the cell")
                    resetTable(highlightCells, highlightValues);
                    const row = Array.prototype.indexOf.call(
                        el.parentNode.parentNode.children,
                        el.parentNode
                    );
                    const column = Array.prototype.indexOf.call(el.parentNode.children, el);
                    highlightRowAndColumn(row, column, highlightRows, highlightValues);
                });
            });
        });
    }

    function resetTable(cells, values) {
        cells.forEach((el) =>
            el.classList.remove('highlight-current-row', 'highlight-current-column')
        );
        values.forEach((el) => el.classList.remove('highlight-current-value'));
    }

    function highlightRowAndColumn(rowIndex, columnIndex, rows, values) {
        const row = rows[rowIndex];
        let i = columnIndex;

        while (i > -1) {
            row.children[i].classList.add('highlight-current-row');
            i--;
        }
        // console.debug("values are the th header - ", values)
        // console.debug("what is the column index, is i")
        const nextRows = rows.slice(rowIndex);
        nextRows.forEach((r) => {
            // console.debug("each row's child", r.children[columnIndex])
            if (r.children[columnIndex] !== undefined) {
                r.children[columnIndex].classList.add('highlight-current-column');
            }
        });


    }

    // Trigger for highlight
    highlightTrigger(".highlight-table")
    /**
     * Allows tables to be dragged
     * @date 2021-12-26
     * @param {any} "tbody"
     * @returns {any}
     */
    $("tbody").sortable({
        cursor: 'row-resize',
        opacity: '0.4',
        items: '.draggable-item',
        update: function(event, ui) {
            console.debug("updated", event, ui)
            // $(".draggable-table").removeClass("highlight-table")
        },
        stop: function(event, ui) {
            // console.debug("stopped", event.target.innerHTML)
            // get rows 
            let rows = $(event.target.rows).toArray()
            console.debug("rows", rows)
            let order = []
            rows.forEach((x) => {
                let row = $(x)
                // console.debug(row.data().id)
                order.push(row.data().id)
            })
            highlightTrigger(".highlight-table")
            // #TODO: you have to ensure that you also drag the tasks appropriately
            // #TODO: update data 
            // $(".draggable-table").addClass("highlight-table")
            // set order function
        }
    }).disableSelection();

    /**
     * Drags columns
     * @date 2021-12-26
     * @param {any} '.draggable-table'
     * @returns {any}
     * @todo need to send ajax to backend
     */
    $('.draggable-table').dragtable({
        persistState: function(table) {
            table.el.find('th').each(function(i) {

                if (this.id != '') {
                    table.sortOrder[this.id] = i;
                }
            });
            highlightTrigger(".highlight-table")
            console.debug("column order", table.sortOrder)
            // $.ajax({
            //     url: '/myAjax?hello=world',
            //     data: table.sortOrder
            // });
        }
    });




})
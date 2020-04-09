(function(){
    console.log('Bookmarklet starting.')
    
    var $ = function(id) { return document.getElementById(id)};

    Document.prototype.queryXPath = function (path) {

        var list = new Array()
      
        var xpath = document.evaluate(
          path,
          document,
          null,
          XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
          null
        )
      
        for (var i=0; i<xpath.snapshotLength; i++) {
      
          list.push(xpath.snapshotItem(i))
      
        }
      
        return list
      
    }

    //https://servicedesk.csiltd.co.uk/WOListView.do?requestViewChanged=true&viewName=39205_MyView&globalViewName=All_Requests
    // var win = window.open('https://servicedesk.csiltd.co.uk/WOAdvancedSearch.do');

    let paragraphs = document.getElementsByTagName('p');
    for (i=0; i<paragraphs.length; i++){
        paragraphs[i].innerHTML = "apples";
    }
})();


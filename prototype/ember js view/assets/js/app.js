Page = Ember.Application.create();
Page.PageController = Ember.ObjectController.create({
    content:{portfolios:[
        {title:'Heading',
            description:'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            button_text:'View details »'},
        {title:'Heading',
            description:'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            button_text:'View details »'}
    ]}
});


Page.PageView = Ember.View.extend({
    addMore:function (event) {
        var prop_name = $(event.target).data("obj");

        var content = JSON.parse(JSON.stringify(Page.PageController.content));
        addMoreElem(prop_name, content);
    },

    edit:function (event) {
        var prop_name = $(event.target).data("obj");
        console.log(event);
        var content = this.getPath('content');
        content['editing'] = true;
        console.log(content);
    },

    doneEditing:function (event) {
        var prop_name = $(event.target).data("obj");
        console.log(event);
        var content = this.getPath('content');
        content['editing'] = true;
        console.log(content);
    }
});

AView = Ember.View.extend({
    eventManager: Ember.Object.create({
        doubleClick: function(event, view){
            // will be called when when an instance's
            // rendered element or any rendering
            // of this views's descendent
            // elements is clicked
        }
    })
});


function addMoreElem(prop_name, content) {
    xinspect(prop_name, content);
    Page.PageController.setProperties(content);

}

function xinspect(prop_name, o, i) {
    if (typeof i == 'undefined')i = '';
    if (i.length > 5)return '[MAX ITERATIONS]';
    for (var p in o) {
        var t = typeof o[p];
        if (p == prop_name) {
            if (o[p].length > 0) {
                var arr = o[p];
                var newClonedObject = JSON.parse(JSON.stringify(arr[arr.length - 1]));
                arr.push(newClonedObject);
                return;
            }
        }
        xinspect(prop_name, o[p], i + '  ');
    }
}


function inspect(obj, maxLevels, level) {
    var str = '', type, msg;

    // Start Input Validations
    // Don't touch, we start iterating at level zero
    if (level == null)  level = 0;

    // At least you want to show the first level
    if (maxLevels == null) maxLevels = 1;
    if (maxLevels < 1)
        return '<font color="red">Error: Levels number must be > 0</font>';

    // We start with a non null object
    if (obj == null)
        return '<font color="red">Error: Object <b>NULL</b></font>';
    // End Input Validations

    // Each Iteration must be indented
    str += '<ul>';

    // Start iterations for all objects in obj
    for (property in obj) {
        try {
            // Show "property" and "type property"
            type = typeof(obj[property]);
            str += '<li>(' + type + ') ' + property +
                ( (obj[property] == null) ? (': <b>null</b>') : ('')) + '</li>';

            // We keep iterating if this property is an Object, non null
            // and we are inside the required number of levels
            if ((type == 'object') && (obj[property] != null) && (level + 1 < maxLevels))
                str += inspect(obj[property], maxLevels, level + 1);
        }
        catch (err) {
            // Is there some properties in obj we can't access? Print it red.
            if (typeof(err) == 'string') msg = err;
            else if (err.message)        msg = err.message;
            else if (err.description)    msg = err.description;
            else                        msg = 'Unknown';

            str += '<li><font color="red">(Error) ' + property + ': ' + msg + '</font></li>';
        }
    }

    // Close indent
    str += '</ul>';

    return str;
}
exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var deferred =  $.Deferred();

    _.defer(function() {
      deferred.resolve(value);
     });

    return deferred.promise();
  },

  manipulateRemoteData : function(url) {
    var deferred =  $.Deferred();

    $.get( url, function( result ) {

     var sortedNames= [];

     if(_.isArray( result.people) ) {

        var sortedArray = _.sortBy( result.people,
                      function( person){
                        return person.name;
                    });

        _.each( sortedArray, function(item){
            sortedNames.push(item.name);
        });
     }
      deferred.resolve(sortedNames);
    });

    return deferred
  }
};

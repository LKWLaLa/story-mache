var TreesHeader =  {
    template: [
    '<header class="trees">',
      '<header class="row">',        
        '<div class="column_9 color white">',
           '<h1 ui-sref="landing" class="text theme margin-top" id="trees"><strong>story</strong>mâché</h1><br><br>',
          '</div>',
      '</div>',
    '</header>',
    ].join('')
   
};
 
angular
    .module('app')
    .component('treesHeader', TreesHeader);
var TreesHeader =  {
    template: [
    '<header class="trees">',
      '<header class="row">',        
        '<div class="column_9 color white">',
           '<h1 class="text theme margin-top"><strong>story</strong>mâché</h1><br>',
          '</div>',
      '</div>',
    '</header>',
    ].join('')
   
};
 
angular
    .module('app')
    .component('treesHeader', TreesHeader);
/**
 * Randomly reorder child elements.
 * The optional *callback* is called with each child and its new (deep) clone, allowing you to
 * copy data over or anything else you may require.
 *
 * Example usage:
 *  controls.songs.reorder(function(child, clone) {
 *    clone.data('info', child.data('info'));
 *    var id = child.data('info').id;
 *    if (self.current != undefined && self.current.data('info').id == id) self.current = clone;
 *    if (self.next != undefined    && self.next.data('info').id == id)    self.next = clone;
 *  });
 *
 * @see http://blog.rebeccamurphey.com/2007/12/11/jquery-plugin-randomly-reorder-children-elements/
 */
$.fn.reorder = function(callback) {
 
  // random array sort @see http://javascript.about.com/library/blsort2.htm
  function randOrd() { return(Math.round(Math.random())-0.5); }
 
  return($(this).each(function() {
    var $this = $(this);
    var $children = $this.children();
    var childCount = $children.length;

    if (childCount > 1) {
      $children.hide();
 
      var indices = new Array();
      for (i=0;i<childCount;i++) { indices[indices.length] = i; }
      indices = indices.sort(randOrd);
      $.each(indices,function(j,k) { 
        var $child = $children.eq(k);
        var $clone = $child.clone(true);
        $clone.show().appendTo($this);
        if (callback != undefined) {
          callback($child, $clone);
        }
        $child.remove();
      });
    }
  }));
}
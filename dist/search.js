function f({recentSearchesKey:a,favoriteSearchesKey:h,maxItemsAllowed:n,retainRecentIfFavorite:c}){return{search_history:[],favorite_items:[],init:function(){this.search_history=this.getInitialItems(a),this.favorite_items=this.getInitialItems(h),this.$watch("search_history",t=>{this.updateLocalStorage(a,t)}),this.$watch("favorite_items",t=>{this.updateLocalStorage(h,t)})},getInitialItems:function(t){return JSON.parse(localStorage.getItem(t))||[]},updateLocalStorage:function(t,e){localStorage.setItem(String(t),JSON.stringify(e))},addToSearchHistory:function(t,e,s){let i={item:t,group:e,url:s},o=this.search_history.filter(r=>!(r.item===i.item&&r.group===i.group));o=[i,...o].slice(0,n),this.search_history=o},deleteFromHistory:function(t,e){let s=this.search_history.findIndex(i=>i.item===t&&i.group===e);s!==-1&&this.search_history.splice(s,1)},deleteAllHistory:function(){this.search_history=[]},addToFavorites:function(t,e,s){c||this.deleteFromHistory(t,e);let i={item:t,group:e,url:s},o=this.favorite_items.filter(r=>!(r.item===i.item&&r.group===i.group));o=[i,...o].slice(0,n),this.favorite_items=o},deleteFromFavorites:function(t,e){let s=this.favorite_items.findIndex(i=>i.item===t&&i.group===e);s!==-1&&this.favorite_items.splice(s,1)},deleteAllFavorites:function(){this.favorite_items=[]}}}export{f as default};

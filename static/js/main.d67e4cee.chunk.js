(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__arjiK",Modal:"Modal_Modal__bbhyK"}},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(8),o=a.n(r),c=a(11),s=a(4),i=a(5),l=a(7),h=a(6),u=a(0),g=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onChangeQuery(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),d=a(20),m=a.n(d),b=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n;return m.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("21141418-363b708104a3c8ce92a316b99","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},j=function(e){var t=e.fetchArticles;return Object(u.jsx)("button",{type:"button",onClick:t,children:"Load more"})},p=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.getImage;return Object(u.jsx)("li",{className:"ImageGalleryItem",children:Object(u.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image",onClick:function(){n(a)}})})},f=function(e){var t=e.hits,a=e.getImage;return Object(u.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(u.jsx)(p,{webformatURL:n,largeImageURL:r,getImage:a},t)}))})},y=a(21),O=a.n(y),v=a(10),w=a.n(v),x=document.querySelector("#modal-root"),I=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("Escape"),e.props.onClose())},e.handleOverlay=function(t){console.log("bac"),t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(u.jsx)("div",{className:w.a.Overlay,onClick:this.handleOverlay,children:Object(u.jsx)("div",{className:w.a.Modal,children:Object(u.jsx)("img",{src:this.props.largeImageURL,alt:""})})}),x)}}]),a}(n.Component),S=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],largeImageURL:"",searchQuery:"",page:1,isLoading:!1,error:null,showModal:!1},e.onChangeQuery=function(t){e.setState({searchQuery:t,page:1,hits:[],error:null})},e.fetchArticles=function(){var t=e.state,a={page:t.page,searchQuery:t.searchQuery};e.setState({isLoading:!0}),b(a).then((function(t){e.setState((function(e){return{hits:[].concat(Object(c.a)(e.hits),Object(c.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.setState({isLoading:!1})}))},e.getImage=function(t){e.setState({largeImageURL:t}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchArticles()}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,n=e.error,r=e.showModal;return Object(u.jsxs)(u.Fragment,{children:[n&&Object(u.jsx)("h2",{children:"Error"}),Object(u.jsx)(g,{onChangeQuery:this.onChangeQuery}),a&&Object(u.jsx)(O.a,{}),Object(u.jsx)(f,{hits:t,getImage:this.getImage}),t.length>0&&Object(u.jsx)(j,{fetchArticles:this.fetchArticles}),r&&Object(u.jsx)(I,{largeImageURL:this.state.largeImageURL,onClose:this.toggleModal})]})}}]),a}(n.Component);a(65);o.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(S,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d67e4cee.chunk.js.map
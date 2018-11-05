# [demo](https://pengliheng.github.io/postcss.html)

### 做个css样式自动优化的API接口以及前端界面


### technology stack
- postcss-loader
- autopretty
- ...


### it is an demo auto change normal css into autopretty



### API
ok,i alse open the API,and let u to input u css code to get hack version

```js
  axios({
    method: 'post',
    url: 'https://api.pipk.top/postcss',
    type: "json",
    data: {
      css: this.msg
    }
  }).then(res=>{
    if(res.data.success){
      this.css = res.data.data.css;
      console.log(this.css);
    }
  }).catch(err=>{
    console.log(err);
    this.$message.error('格式不合法')
  })
```
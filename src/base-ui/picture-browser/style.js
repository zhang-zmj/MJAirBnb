import styled from "styled-components";

export const BrowerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;

  //上下分成三部分
  opacity: 1;
  display: flex;
  flex-direction: column;

  .top{
    position: relative;
    height: 86px;

    .close-btn{
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider{
    display: flex;
    justify-content: center;
    flex: 1;

     //使用的是绝对定位，跟这个没关系
    .control{
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 86px;
      display: flex;
      justify-content: space-between;
      bottom: 0;
      color: #fff;

      .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture{
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none; //用于设置或检索是否允许用户选中文本

      }

      //动画的样式
      .pic-enter{
        //相对于之前的大小
        transform: translateX(${props => props.isNext ? "100%" : "-100%"});
        opacity: 0;
      }
      .pic-enter-active{
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-eixt{
        transform: translate(0);
        opacity: 1;
      }

      .pic-eixt-active{
        opacity: 0;
        transition: all 200ms ease;
      }
    }

  }

  .preview{
    height: 100px;
    margin-top: 10px;
    background-color: purple;


  }


`
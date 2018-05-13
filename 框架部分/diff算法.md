# 基于virtual dom的diff算法简析

在如React、Vue等的现代前端框架中，virtual dom(后面简称v-dom)扮演着一个举足轻重的角色，而其之精粹————diff算法，便是今天的主人公

在HTML中，所有的元素在其上表现为一个DOM结点，而在JS对其进行操作的时候，会产生大量的牺牲(详见我的这篇文章——[DOM操作为什么这么耗时？](https://blog.peterchen.club/articlesList/article1526130082989))，影响网页性能，所以，我们要在完成需求的前提下，尽量减少对DOM节点的操作次数，这是前端优化方面的一个关键要素，而v-dom的diff算法，则是一名大救星

在面试当中，面试官也会在考察框架知识时，v-dom的diff算法作为框架的经典元素之一，也不可或缺的会考察与之相关的一些知识，看看面试者对框架的使用和理解的深浅程度

所以说，无论从前端优化还是前端面试的角度来说，v-dom与其diff算法，都是前端领域十分重要的一个知识点，那么来看看，他们到底是什么

## 啥是v-dom

由于对原生DOM的操作十分耗时，所以facebook的大佬们想到，使用原生的JS对象，来存储实际在HTML中保存的DOM对象，这样，当我们需要操作原生DOM的时候，直接操作JS对象，并将其与操作前的JS对象进行比对(diff算法)，将不同的部分进行应用,就可以最小化对前端资源的消耗，达到优化的目的了

想了解，如何实现v-dom,可以看我的这篇文章[virtual dom有多秀](https://blog.peterchen.club/articlesList/article1526130044786)

我们都知道，DOM结点在HTML中是以树的形式存储的，v-dom中最为核心的算法，就是比较两棵树的diff算法了，那么我们来看看，如果用经典二叉树中的diff算法，如何来做，以及它的优化版本

## 二叉树的diff算法

传统的diff算法的思路如下，将新旧两棵树的结点进行一一对比，然后判断结点的更新状态，是删除，更新还是增加，时间复杂度为o(n^2)

### 时间复杂度是o(n^2)还是o(n^3)

如果只是单纯的进行结点比对的话，时间复杂度应该为o(n^2)，但是网上流传的传统diff算法，复杂度为o(n^3)，我猜测是在比对基础上，寻找最优的移动位置

---

那么显而易见，无论是o(n^2)还是o(n^3)，对于交互性极强，功能复杂的一些前端页面来说，这样高昂的时间代价是不可接受的，那么，facebook的大佬们，他们想到了啥

## 时间复杂度为o(n)的diff算法

时间复杂度为o(n)，没错，大佬们的操作，就是这么秀。

当然，世界是平衡的，有舍才有得，基于v-dom的diff算法这么优秀，当然是付出了一些可以接受的代价，并且随之而来的是，换取的更大的优化空间

那么，大佬们做了哪些优化呢？

### tree diff: 不跨层级比较

因为在Web UI 中 DOM 节点跨层级的移动操作特别少，可以忽略不计

所以tree diff只会对相同颜色方框内的 DOM 节点进行比较，即同一个父节点下的所有子节点。当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较

![tree diff](https://www.peterchen.club/imgs/tree-diff.png)

### component diff：不同组件间不比较

- 如果组件类型相同，则比较同组件下的元素，可通过shouldComponentUpdate()判断
- 如果组件类型不同，则删除原有结点，新增整个组件下的子节点

![component diff](https://www.peterchen.club/imgs/tree-diff.png)


### elelment diff：同一层的结点，通过Key区分

当节点处于同一层级时，React diff 提供了三种节点操作，分别为：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）和 REMOVE_NODE（删除）

同一层的结点，为了防止出现，移动一个元素的相对位置，引发所有元素重新插入的低效情况，允许开发者对同一层级的同组子节点，添加唯一 key 进行区分

- INSERT_MARKUP，新的 component 类型不在老集合里， 即是全新的节点，需要对新节点执行插入操作。
- MOVE_EXISTING，在老集合有新 component 类型，且 element 是可更新的类型，generateComponentChildren 已调用 receiveComponent，这种情况下 prevChild=nextChild，就需要做移动操作，可以复用以前的 DOM 节点。
- REMOVE_NODE，老 component 类型，在新集合里也有，但对应的 element 不同则不能直接复用和更新，需要执行删除操作，或者老 component 不在新集合里的，也需要执行删除操作。

## 结语

v-dom在提出后，有前端方面的优化注入了新的活力，作为前端学习者之一，理解，融会贯通，开发新的思路，是永远不会结束的学习之旅，stay hungry, stay foolish

### 参考文章

[react diff 原理](http://imweb.io/topic/579e33d693d9938132cc8d94)
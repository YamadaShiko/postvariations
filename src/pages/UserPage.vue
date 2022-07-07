<template>
<div>
    <h1>Page with Posts</h1>
    <my-input 
    v-model="searchQuery"
    placeholder="Search..."
    v-focus
    >
    </my-input>
    <div class="app__btns">
    <my-button
    @click="showDialog"
    >
    Create Post
    </my-button>
    <my-select 
    v-model="selectSort"
    :options="sortOptions"
    >    
    </my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
<post-form
    @create="createPost"
    />
    </my-dialog>
    <post-list 
       :posts="sortedAndSearchedPosts"
       @remove="removePost"
       v-if="!isPostsLoading" 
    />
    <div v-else>Downloading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div class="page__wrapper"> 
        <div 
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{
            'current-page' : page === pageNumber
        }"
        @click="changePage(pageNumber)"
        >
        {{ pageNumber }}
        </div>
        </div> -->                                                    
</div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostItem from "@/components/PostItem.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from 'axios';
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from "@/components/UI/MyInput.vue";


export default {
    components: {
    PostList,
    PostForm,
    PostItem,
    MyDialog,
    MyButton,
    MySelect,
    MyInput
},
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержимому'}
            ]
            
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
    //    changePage(pageNumber) {
    //        this.page = pageNumber
    //    this.fetchPosts()
    //    },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil( response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
            } catch (e) {
                alert('Error')
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil( response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert('Error')
            }
        }
    },
    mounted() {
        this.fetchPosts();
        console.log(this.$refs.observer);
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectSort]?.localeCompare(post2[this.selectSort]))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
    },
} 
</script>

<style>

.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
/* .page__wrapper {
    display: flex;
    margin-top: 15px;
} */
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page {
    border: 2px solid teal;
}

</style>
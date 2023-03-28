<template>
    <div class="notes">
        <div class="card has-background-warning-dark p-4 mb-5">
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="請輸入筆記內容..."></textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button class="button is-link is-warning">新增筆記</button>
                </div>
            </div>
        </div>

        <div v-for="item in 3" class="card mb-4">
            <div class="card-content">
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi labore corporis eius adipisci
                    perspiciatis sit officiis fuga odio, molestiae eum quidem accusamus nisi accusantium saepe.
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Delete</a>
            </footer>
        </div>
    </div>
</template>

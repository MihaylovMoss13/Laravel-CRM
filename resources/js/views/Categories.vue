<template>
  <div class="card shadow mb-4">
    <div class="card-header py-3 d-flex">
        <h6 class="m-0 font-weight-bold text-primary">Все категории</h6>
        <button @click="showNewCategoryModal" class="btn btn-primary btn-sm ml-auto">
          <span class="fa fa-plus"></span> Создать категорию</button>
    </div>
    <div class="card-body">
        <div class="table-responsive">
        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
            <tr>
                <th>Название</th>
                <th>Изображение</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>Название</th>
                <th>Изображение</th>
            </tr>
            </tfoot>
            <tbody>
            <tr>
                <td>Первая категория</td>
                <td>Картинка</td>
            </tr>
            <tr>
                <td>Вторая категория</td>
                <td>Картинка</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

    <b-modal ref="newCategoryModal" hide-footer title="Добавить новую категорию">
      <div class="d-block">
        <form @submit.prevent="createCategory">
            <div class="form-group">
                <label for="title">Название</label>
                <input type="text" v-model="categoryData.title" 
                    class="form-control" id="title"
                    placeholder="Введите название категории">
            </div>
            <div class="form-group">
                <label for="image">Выберите изображение</label>
                <input type="file" @change="attachImage" 
                    class="form-control" id="image">
            </div>
            <hr>
            <div class="text-right">
                <button type="button" @click="hideNewCategoryModal" class="btn btn-default">Отмена</button>
                <button type="submit" class="btn btn-primary">
                    <span class="fa fa-check"></span> Добавить</button>
            </div>
         </form>
      </div>
    </b-modal>

  </div>
</template>

<script>
export default {
    name: 'category',
    data() {
        return {
            categoryData: {
              title: '',
              image: '',
            }
        }
    },
    methods: {
        attachImage() {
            //
        },
        hideNewCategoryModal() {
           this.$refs.newCategoryModal.hide();
        },
        showNewCategoryModal() {
           this.$refs.newCategoryModal.show();
        },
        createCategory() {
            console.log('Форма отправлена!');
        }
    }
}
</script>
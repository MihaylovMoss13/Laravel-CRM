<template>
  <div id="wrapper">

    <Sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <Topbar />

        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Панель управления</h1>
          </div>

          <div class="row">
            <div class="col-lg-12 mb-4">
                <router-view></router-view>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <Footer />

    </div>
    <!-- End of Content Wrapper -->

  </div>
</template>

<script>
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default {
    components: {
       Topbar,
       Sidebar,
       Footer
    }
}
</script>
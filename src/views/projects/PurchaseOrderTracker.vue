<template>
  <ProjectPage
    title="Purchase Order Tracker"
    subtitle="Custom software for tracking purchase orders"
    coverImage="/src/assets/images/projects/pot/pot.png"
    :tech="['HTML', 'CSS', 'JavaScript', 'vue.js', 'nest.js']"
    :features="[
      'Keeps list of items to be ordered',
      'Tracks and manages outstanding purchase orders',
      'Archive completed orders for later export or reporting',
      'Account authentication through Azure AD connection',
      'Admin panel for managing global settings and users',
    ]"
    :screenshots="['/src/assets/images/projects/pot/pot.png']"
  >
  <p>
    Purchase Order Tracker (POT) was developed out of the need for a piece of software that could track all purchase
    orders for the IT department at <a href="https://cenero.com" target="_blank">Cenero.</a> Pot holds a list of pending items to be ordered, then converts those items
    into a proper purchase order when the order is placed through a vendor. Once in the system, purchase data can be
    monitored through the dashboard via the various included charts. Pot will then track each item in the purchase
    order, and finally mark the entire order as complete once all items have been recieved. Users are able to login with
    their azure AD credentials and An admin panel was also included to manage users and global settings
  </p>
  <p style="margin-top: 40px;">*Note: Unfortunately, due to the nature of this project, more detailed screenshots are not available.</p>
  </ProjectPage>
</template>

<script setup lang="ts">
import ProjectPage from "@/views/projects/ProjectPage.vue";
</script>

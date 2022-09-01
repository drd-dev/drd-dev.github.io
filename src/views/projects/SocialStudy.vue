<template>
  <ProjectPage
    title="Social Study"
    subtitle="A real-time collaborative learning platform for students"
    coverImage="https://i.ibb.co/MkCzmMH/social-Study.gif"
    about=" "
    :tech="['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Firebase', 'Express.js']"
    demoURL="https://socialstudy.app"
    sourceURL="https://github.com/Social-Study/social-study"
    :features="[
      'Real-time collaboration',
      'Study groups',
      'Real-time chat',
      'Flashcards',
      'Practice quizzes',
      'Agenda/calendar',
      'Note taking',
    ]"
    :screenshots="[
      '/src/assets/images/projects/socialStudy/home.png',
      '/src/assets/images/projects/socialStudy/dashboard.png',
      '/src/assets/images/projects/socialStudy/flashcards.png',
      '/src/assets/images/projects/socialStudy/agenda.png',
      '/src/assets/images/projects/socialStudy/generateQuiz.png',
      '/src/assets/images/projects/socialStudy/takeQuiz.png',
      '/src/assets/images/projects/socialStudy/notes.png',
      '/src/assets/images/projects/socialStudy/members.png',
      '/src/assets/images/projects/socialStudy/settings.png',
      '/src/assets/images/projects/socialStudy/invite.png',
    ]"
  >
  <p>Social Study is a real-time collaborative web application for students to assist with course work. It was developed by a team of four at Kutztown University as a senior project and won second-place overall.
    After completion of the project, the team members of Social Study signed the release of a limited copyright of the Social Study source code to Kutztown University, where they plan to incorporate it into the classroom.
  </p>
  <p style="margin-top: 30px;">With Social Study, a student can create flashcards, take notes, plan out their agenda, and chat in real-time with fellow classmates. Using our specialized system, a student can generate practice quizzes based on the data in their flashcards and share them with their friends.</p>
  </ProjectPage>
</template>

<script setup lang="ts">
import ProjectPage from "@/views/projects/ProjectPage.vue";
</script>

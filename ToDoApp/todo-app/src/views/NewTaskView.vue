<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="task-name" class="form-label">Új feladat neve:</label>
                <input type="email" class="form-control" id="task-name">
            </div>
            <div class="mb-3">
                <label for="task-description" class="form-label">Leírás:</label>
                <textarea class="form-control" id="task-description"></textarea>
            </div>
            <div class="mb-3">
                <label for="task-deadline" class="form-label">Határidő:</label>
                <input type="date" class="form-control" id="task-deadline">
            </div>
            <button type="submit" class="btn btn-primary">Hozzáadás</button>
        </form>
    </div>
</template>
<script setup></script>
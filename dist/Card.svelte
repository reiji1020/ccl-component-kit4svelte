<script>export let borderColor;
export let bgColor;
export let src;
export let altText;
export let title;
export let cardText;
</script>

<div class="CardWrapper" style="--border-color: var({borderColor})">
    <img class="CardImage" src={src} alt={altText} />
    <div class="CardInfo" style="--background-color: var({bgColor});">
        <div class="CardTextWrapper">
            <h2 class="CardTitle">{title}</h2>
            <span class="CardText">{cardText}</span>
        </div>
    </div>
</div>


<style>
    .CardWrapper {
        height: 500px;
        width: 300px;
        position: relative;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25); border-radius: 25px;
        border: 5px solid var(--border-color);
        z-index: -1;
    }

    .CardImage {
        height: auto;
        max-width: 100%;
        top: 0;
        position: absolute;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .CardInfo {
        height: 195px;
        width: 300px;
        position: absolute;
        background: var(--background-color);
        top: 300px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top: 5px solid var(--border-color);
        z-index: 1;
    }

    .CardTextWrapper {
        height: auto;
        max-width: 95%;
        position: absolute;
        top: -5%;
        left: 5%;
        overflow-wrap: break-word;
    }

    .CardTitle {
        color: var(--border-color);
    }

    .CardText {
        color: var(--wrap-grey);
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
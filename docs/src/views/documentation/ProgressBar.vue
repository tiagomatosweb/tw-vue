<template>
    <div class="flex flex-col gap-12">
        <div class="flex flex-col gap-4">
            <div>
                <h1 class="text-3xl font-bold">Variants</h1>
            </div>
            <div>
                <ul class="flex flex-col gap-4">
                    <li class="flex flex-col gap-4">
                        <h4 class="font-bold">primary</h4>
                        <TWProgressBar
                            variant="primary"
                            percentage="20"
                            size="sm"
                        />
                    </li>
                    <li class="flex flex-col gap-2">
                        <h4 class="font-bold">secondary</h4>
                        <TWProgressBar
                            variant="secondary"
                            percentage="40"
                            size="sm"
                        />
                    </li>
                    <li class="flex flex-col gap-2">
                        <h4 class="font-bold">success</h4>
                        <TWProgressBar
                            variant="success"
                            percentage="60"
                            size="sm"
                        />
                    </li>
                    <li class="flex flex-col gap-2">
                        <h4 class="font-bold">danger</h4>
                        <TWProgressBar
                            variant="danger"
                            percentage="80"
                            size="sm"
                        />
                    </li>
                    <li class="flex flex-col gap-2">
                        <h4 class="font-bold">warning</h4>
                        <TWProgressBar
                            variant="warning"
                            percentage="100"
                            size="sm"
                        />
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <h1 class="text-3xl font-bold">Sizes</h1>
            <div>
                <ul class="flex flex-col gap-4">
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">sm</h4>
                        <TWProgressBar
                            variant="primary"
                            percentage="33"
                            size="sm"
                        />
                    </li>
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">md</h4>
                        <TWProgressBar
                            variant="primary"
                            percentage="66"
                            size="md"
                        />
                    </li>
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">lg</h4>
                        <TWProgressBar
                            variant="primary"
                            percentage="100"
                            size="lg"
                        />
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <h1 class="text-3xl font-bold">Percentage</h1>
            <div>
                <ul class="flex flex-col gap-4">
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">33%</h4>
                        <TWProgressBar
                            variant="success"
                            percentage="33"
                            size="sm"
                        />
                    </li>
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">66%</h4>
                        <TWProgressBar
                            variant="success"
                            percentage="66"
                            size="sm"
                        />
                    </li>
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">100%</h4>
                        <TWProgressBar
                            variant="success"
                            percentage="100"
                            size="sm"
                        />
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-4 py-12">
            <h1 class="text-3xl font-bold">direction</h1>
            <div>
                <ul class="flex flex-col gap-4">
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">top</h4>
                        <TWProgressBar
                            variant="primary"
                            percentage="33"
                            size="sm"
                            direction="top"
                        />
                    </li>
                    <li class="flex flex-col gap-1">
                        <h4 class="font-bold">bottom</h4>
                        <TWProgressBar
                            variant="primary"
                            percentage="33"
                            size="sm"
                            direction="bottom"
                        />
                    </li>

                </ul>
            </div>
        </div>
        <div class="flex flex-col gap-4 py-12">
            <div>
                <ul class="flex flex-col gap-4">
                    <li class="flex flex-col gap-1">
                        <h1 class="text-3xl font-bold">Seu XP!</h1>
                        <TWProgressBar variant="secondary" percentage="50" tooltip="Seu XP!"/>
                    </li>
                    <li class="flex flex-col gap-1">
                        <h1 class="text-3xl font-bold">Seu Level!</h1>
                        <TWProgressBar variant="success" percentage="85" tooltip="Seu Level!!"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>

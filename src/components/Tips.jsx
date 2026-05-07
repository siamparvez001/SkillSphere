
import { LuTimerReset } from "react-icons/lu";
import { MdNoteAlt } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { MdTipsAndUpdates } from "react-icons/md";
import AnimatedCard from "./AnimatedCard";
const Tips = () => {
    return (

        <div className="bg-zinc-700 py-10">
            <div className="max-w-7xl mx-auto px-10 text-white">
                <div className="flex justify-start items-center gap-3">
                    <MdTipsAndUpdates size="25px"></MdTipsAndUpdates>
                    <h1 className="text-2xl font-bold">Learning Tips</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                    <AnimatedCard>
                        <div className="flex justify-between border px-5 py-8 gap-5 rounded-2xl">
                            <div>
                                <LuTimerReset size="50px"></LuTimerReset>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Daily 30 mins</h1>
                                <p className="opacity-70">Consistent short sessions beat long irregular ones.</p>
                            </div>
                        </div>
                    </AnimatedCard>
                    <AnimatedCard>
                        <div className="flex justify-between border px-5 py-8 gap-5 rounded-2xl">
                            <div>
                                <MdNoteAlt size="50px"></MdNoteAlt>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Take notes</h1>
                                <p className="opacity-70">Writing improves retention significantly.</p>
                            </div>
                        </div>
                    </AnimatedCard>
                    <AnimatedCard>
                        <div className="flex justify-between border px-5 py-8 gap-5 rounded-2xl">
                            <div>
                                <GoGoal size="50px"></GoGoal>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">Set clear goals</h1>
                                <p className="opacity-70">Know what you want to achieve before starting.</p>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </div>
        </div>

    );
};

export default Tips;